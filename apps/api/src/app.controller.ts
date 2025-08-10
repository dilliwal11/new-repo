import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('menu')
  getMenu(): unknown {
    return {
      categories: [
        {
          id: 'cat_oolong',
          name: 'Oolong Teas',
          position: 1,
          items: [
            {
              id: 'item_taro_milk',
              name: 'Taro Milk Tea',
              description: 'Classic taro with milk.',
              image_url: 'https://cdn.example.com/i/taro.jpg',
              sizes: [
                { name: 'M', price_cents: 450 },
                { name: 'L', price_cents: 550 }
              ],
              modifiers: [
                { id: 'mod_boba', name: 'Boba', price_delta_cents: 50 }
              ]
            }
          ]
        }
      ],
      version: 'v1',
      generated_at: new Date().toISOString()
    };
  }
}
