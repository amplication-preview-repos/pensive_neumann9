import { Module } from "@nestjs/common";
import { TouristAttractionModuleBase } from "./base/touristAttraction.module.base";
import { TouristAttractionService } from "./touristAttraction.service";
import { TouristAttractionController } from "./touristAttraction.controller";
import { TouristAttractionResolver } from "./touristAttraction.resolver";

@Module({
  imports: [TouristAttractionModuleBase],
  controllers: [TouristAttractionController],
  providers: [TouristAttractionService, TouristAttractionResolver],
  exports: [TouristAttractionService],
})
export class TouristAttractionModule {}
