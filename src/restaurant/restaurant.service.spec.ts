import { RestaurantService } from './restaurant.service';
import { GetRestaurantsDto } from './dto/restaurant.dto';

describe('RestaurantService.getRestaurants', () => {
  const prismaMock = {
    $queryRaw: jest.fn(),
  };
  const placeServiceMock = {
    geocode: jest.fn(),
  };

  const service = new RestaurantService(
    placeServiceMock as never,
    prismaMock as never,
  );

  const dto = {
    latitude: 25.2048,
    longitude: 55.2708,
    skip: 0,
    take: 10,
    page: 1,
  } as GetRestaurantsDto;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns guest data with neutral user fields', async () => {
    prismaMock.$queryRaw
      .mockResolvedValueOnce([
        {
          id: 'r-1',
          placeId: 'place-1',
          name: 'Restaurant 1',
          city: 'Dubai',
          latitude: 25.2,
          longitude: 55.2,
          distance: '1.23',
          items: [
            {
              id: 'm-1',
              name: 'Item 1',
              price: '42.50',
              description: null,
              image: 'img',
              video: 'video',
              createdAt: '2026-01-01T00:00:00.000Z',
              isLiked: false,
              isSaved: false,
            },
          ],
        },
      ])
      .mockResolvedValueOnce([{ count: 1n }]);

    const result = await service.getRestaurants(undefined, dto);

    expect(prismaMock.$queryRaw).toHaveBeenCalledTimes(2);
    expect(result.data).toHaveLength(1);
    expect(result.data[0].items[0].isLiked).toBe(false);
    expect(result.data[0].items[0].isSaved).toBe(false);
    expect(result.data[0].items[0].price).toBe(42.5);
    expect(result.meta.itemsCount).toBe(1);
  });

  it('returns authenticated data with the same payload shape', async () => {
    prismaMock.$queryRaw
      .mockResolvedValueOnce([
        {
          id: 'r-1',
          placeId: 'place-1',
          name: 'Restaurant 1',
          city: 'Dubai',
          latitude: 25.2,
          longitude: 55.2,
          distance: '0.99',
          items: [
            {
              id: 'm-1',
              name: 'Item 1',
              price: '12.00',
              description: 'desc',
              image: 'img',
              video: 'video',
              createdAt: '2026-01-01T00:00:00.000Z',
              isLiked: true,
              isSaved: false,
            },
          ],
        },
      ])
      .mockResolvedValueOnce([{ count: 1n }]);

    const authResult = await service.getRestaurants(
      '11111111-1111-1111-1111-111111111111',
      dto,
    );

    expect(prismaMock.$queryRaw).toHaveBeenCalledTimes(2);
    expect(authResult.data).toHaveLength(1);
    expect(authResult.data[0].items[0].isLiked).toBe(true);
    expect(authResult.data[0].items[0].isSaved).toBe(false);

    const payloadKeys = Object.keys(authResult.data[0].items[0]).sort();
    expect(payloadKeys).toEqual(
      [
        'createdAt',
        'description',
        'id',
        'image',
        'isLiked',
        'isSaved',
        'name',
        'price',
        'video',
      ].sort(),
    );
  });
});
