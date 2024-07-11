import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TouristAttractionServiceBase } from "./base/touristAttraction.service.base";

@Injectable()
export class TouristAttractionService extends TouristAttractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
