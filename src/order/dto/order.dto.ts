import { IsEnum, IsUUID } from 'class-validator';
import { DeliveryService } from '~/order/types/order.enum';

export class CreateOrderDto {
  @IsUUID()
  menuItemId: string;

  @IsEnum(DeliveryService)
  deliveryService: DeliveryService;
}
