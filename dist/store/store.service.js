"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const store_schema_1 = require("./schemas/store.schema");
let StoreService = class StoreService {
    constructor(storeModel) {
        this.storeModel = storeModel;
    }
    async findAll() {
        const stores = await this.storeModel.find();
        return stores;
    }
    async create(store) {
        const res = await this.storeModel.create(store);
        return res;
    }
    async findById(id) {
        const store = await this.storeModel.findById(id);
        if (!store) {
            throw new common_1.NotFoundException('Store not found');
        }
        return store;
    }
    async updateById(id, store) {
        return await this.storeModel.findByIdAndUpdate(id, store, {
            new: true,
            runValidators: true,
        });
    }
    async deleteById(id) {
        return await this.storeModel.findByIdAndDelete(id);
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(store_schema_1.Store.name)),
    __metadata("design:paramtypes", [mongoose.Model])
], StoreService);
//# sourceMappingURL=store.service.js.map