import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TouristAttractionService } from "./touristAttraction.service";
import { TouristAttractionControllerBase } from "./base/touristAttraction.controller.base";

@swagger.ApiTags("touristAttractions")
@common.Controller("touristAttractions")
export class TouristAttractionController extends TouristAttractionControllerBase {
  constructor(protected readonly service: TouristAttractionService) {
    super(service);
  }
}
