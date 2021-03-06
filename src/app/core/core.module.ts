import { NotificationService } from './../shared/messages/notification.service';
import { OrderService } from './../order/order.service';
import { RestaurantsService } from './../restaurants/restaurants.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NgModule } from "@angular/core";

@NgModule({
    providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationService]
})

export class CoreModule {
    
}