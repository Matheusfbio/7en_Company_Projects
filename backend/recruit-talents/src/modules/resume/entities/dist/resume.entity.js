"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Resume = void 0;
var user_entity_1 = require("../../user/entities/user.entity");
var typeorm_1 = require("typeorm");
var entities_1 = require("../../../common/entities");
var Resume = /** @class */ (function (_super) {
    __extends(Resume, _super);
    function Resume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.OneToOne(function () { return user_entity_1.User; }, function (user) { return user.resume; })
    ], Resume.prototype, "user");
    __decorate([
        typeorm_1.Column()
    ], Resume.prototype, "resume");
    __decorate([
        typeorm_1.Column({
            type: 'uuid'
        })
    ], Resume.prototype, "userId");
    Resume = __decorate([
        typeorm_1.Entity('resume')
    ], Resume);
    return Resume;
}(entities_1.CommonEntity));
exports.Resume = Resume;
