import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { CryptUtil } from 'src/common/utils/crypt-util';
import { Repository } from 'typeorm';
import { UserSkillService } from '../user-skill/user-skill.service';
import { UserCreateDto } from './dto/user-create.dto';
import { UserUpdateDto } from './dto/user-update.dto';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
    private userSkillService: UserSkillService,
  ) {}

  public async create(userCreateDto: UserCreateDto): Promise<UserDto> {
    try {
      const user = this.repo.create(userCreateDto);
      const dbUser = await this.repo.save(user);
      const userSkill = [];
      console.log(userCreateDto);
      userCreateDto.userSkill.forEach(async (Skill) => {
        await this.userSkillService.create({
          userId: dbUser.id,
          skillId: Skill.skillId,
        });
        console.log(Skill);
      });
      return plainToInstance(UserDto, dbUser);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('Erro ao criar um usuario');
    }
  }

  public async findAll(): Promise<UserDto[]> {
    const users = await this.repo.find({
      relations: ['userSkill.skill'],
    });
    return plainToInstance(UserDto, users);
  }

  private async findById(id: string): Promise<User> {
    const user = this.repo.findOne({
      where: { id },
      relations: ['userSkill.skill'],
    });

    if (!user) {
      throw new NotFoundException('Usuario não encontrado!');
    }
    return user;
  }

  public async findOne(id: string): Promise<UserDto> {
    const user = await this.findById(id);
    return plainToInstance(UserDto, user);
  }

  public async update(
    id: string,
    userUpdateDto: UserUpdateDto,
  ): Promise<UserDto> {
    const user = await this.findById(id);
    const newUser: User = {
      ...user,
      ...userUpdateDto,
    };
    this.repo.save(newUser);
    return plainToInstance(UserDto, newUser);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findById(id);
    await this.repo.remove(user);
  }

  async validateUserPassoword(
    email: string,
    password: string,
  ): Promise<UserDto | null> {
    const user = await this.repo.findOne({
      where: {
        email,
      },
    });

    if (
      user &&
      (await CryptUtil.validatePassword(password, user.password, user.salt))
    ) {
      return plainToInstance(UserDto, user);
    } else {
      return null;
    }
  }
}
