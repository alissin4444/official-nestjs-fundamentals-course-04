"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeRatingModule = void 0;
const coffees_module_1 = require("../coffes/coffees.module");
const coffes_service_1 = require("../coffes/coffes.service");
const database_module_1 = require("../database/database.module");
const common_1 = require("@nestjs/common");
class MockCoffeesService {
}
let CoffeeRatingModule = class CoffeeRatingModule {
};
exports.CoffeeRatingModule = CoffeeRatingModule;
exports.CoffeeRatingModule = CoffeeRatingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule.register({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
            }),
            coffees_module_1.CoffeesModule,
        ],
        providers: [
            {
                provide: coffes_service_1.CoffeesService,
                useValue: new MockCoffeesService(),
            },
        ],
    })
], CoffeeRatingModule);
//# sourceMappingURL=coffee-rating.module.js.map