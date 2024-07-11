import * as graphql from "@nestjs/graphql";
import { TouristAttractionResolverBase } from "./base/touristAttraction.resolver.base";
import { TouristAttraction } from "./base/TouristAttraction";
import { TouristAttractionService } from "./touristAttraction.service";

@graphql.Resolver(() => TouristAttraction)
export class TouristAttractionResolver extends TouristAttractionResolverBase {
  constructor(protected readonly service: TouristAttractionService) {
    super(service);
  }
}
