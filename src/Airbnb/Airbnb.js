import React from "react";
import axios from "axios";
import { Button, Card, Form, Col, Row, Alert } from "react-bootstrap";
import AirbnbCard from "./AirbnbCard";
import './Airbnb.css';

class Airbnb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airbnbData: [],
      error: '',
      // airbnbData: [
      //   {
      //     "url": "https://www.airbnb.com/rooms/2150160",
      //     "city": "Paris",
      //     "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-3904491/original/3b5bc385-b2e7-40ee-9ca7-7af28b00579c.jpeg?aki_policy=profile_x_medium",
      //     "persons": 2,
      //     "reviewsCount": 540,
      //     "rating": 4.51,
      //     "address": "Paris, IDF, France",
      //     "price": {
      //       "rate": 95,
      //       "currency": "USD",
      //       "total": 95,
      //       "priceItems": [
      //         {
      //           "amount": 64
      //         },
      //         {
      //           "amount": 14
      //         },
      //         {
      //           "amount": 13
      //         },
      //         {
      //           "amount": 4
      //         }
      //       ]
      //     },
      //     "previewAmenities": [
      //       "Wifi",
      //       "Kitchen",
      //       "Washer"
      //     ],
      //     "name": "Charming room in a charming flat",
      //     "bathrooms": 1,
      //     "bedrooms": 1,
      //     "bed": 1,
      //     "images": [
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/e0e23de6-a3aa-45be-94f0-e5ff7958c5e8.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/20278634-c22e-47d1-a396-5f07074e6d56.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/7b165168-cc07-4a66-b52e-487415daef68.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/d3e46cd6-ba59-4785-b367-cea56585bfb2.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/c9a39059-f7aa-4621-a53a-b4fd086db919.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/b0d54526-39f9-4d61-b3d4-feb8fcc6f20a.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/3f4a17bd-6a69-4140-8b09-9aa0044942bd.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/8c18a791-d59d-4ce8-a2cb-1f8e9d370ed7.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/825936a4-c103-470c-8f1f-86ff3771c6a0.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/c15b25b2-f5f1-493f-abef-110e1d85ec07.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/865494c4-e223-46c3-a5b0-1fea23aa0a31.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/a9f59943-6504-4c26-aeb8-5fd3b457aee3.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/18b8eacd-62a5-480c-b9cc-aff2b921bd97.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/59524505-2ffa-4682-86a7-8e3be9c4e437.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/e707f245-ff85-4b0b-9422-3e76e51de31d.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/8a1c13f6-7f75-498c-af36-30fa32331975.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/0737538f-8531-4d69-95d6-0a61eddbb369.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/8ac187c9-eaa8-4618-8012-aeae7aa35e02.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/d0979698-fed7-4b6c-93df-90ee9c8e8fc5.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/116381a3-aceb-4ac4-bd6c-19e63184673c.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/a6f821d5-d356-4434-9598-50cea65c471a.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/3902253d-d37a-4ab1-8b3b-ef991b4cceb2.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/8a5f44c2-0e74-4ebd-95c5-aa5f80e23b79.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/91f95d35-6c0f-4e5a-aa67-87fba2d82816.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/36065799/898d6f17_original.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/112406ea-09fe-4b8f-8d2a-4e21c99f7155.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-2150160/original/5d941f08-0424-46fd-923d-971166b3530a.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/35768243/cf00d011_original.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/36066076/d1c71a11_original.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/36066127/4be5c3a8_original.jpg?im_w=720"
      //     ]
      //   },
      //   {
      //     "url": "https://www.airbnb.com/rooms/774582581519038073",
      //     "city": "Clichy",
      //     "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-296443273/original/072cabd8-50af-4488-96a3-a77cf4687574.jpeg?aki_policy=profile_x_medium",
      //     "persons": 1,
      //     "reviewsCount": 41,
      //     "rating": 4.8,
      //     "address": "Clichy, Île-de-France, France",
      //     "price": {
      //       "rate": 48,
      //       "currency": "USD",
      //       "total": 48,
      //       "priceItems": [
      //         {
      //           "amount": 39
      //         },
      //         {
      //           "amount": 7
      //         },
      //         {
      //           "amount": 2
      //         }
      //       ]
      //     },
      //     "previewAmenities": [
      //       "Wifi",
      //       "Kitchen"
      //     ],
      //     "name": "Chill out room.",
      //     "bathrooms": 1,
      //     "bedrooms": 1,
      //     "bed": 1,
      //     "images": [
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/1edabf13-5e25-4bd9-a857-b2b58b58997c.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/10b2e1a2-d457-429f-9903-159d15853697.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/3db59b54-856c-4a1d-a3bb-763a6d8add1a.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/9f7da025-6f92-4925-8d1c-c935d3298317.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/4a27c4a0-4999-4cb2-ad3b-52a336d4f6b0.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/71b68203-e503-4694-9d95-963d3eb54b02.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/f61d4232-c710-48cd-ac9a-b44048d8b120.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/26ab4862-5562-4e91-8315-98e1d1697200.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-774582581519038073/original/6c9b3514-5c7d-4aaa-a941-524006f05288.jpeg?im_w=720"
      //     ]
      //   },
      //   {
      //     "url": "https://www.airbnb.com/rooms/886776064762251291",
      //     "city": "Paris",
      //     "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7e15d6ff-d472-4856-9a68-009629e05131.jpg?aki_policy=profile_x_medium",
      //     "persons": 2,
      //     "reviewsCount": 0,
      //     "address": "Paris, Île-de-France, France",
      //     "price": {
      //       "rate": 59,
      //       "currency": "USD",
      //       "total": 59,
      //       "priceItems": [
      //         {
      //           "amount": 48
      //         },
      //         {
      //           "amount": 8
      //         },
      //         {
      //           "amount": 3
      //         }
      //       ]
      //     },
      //     "previewAmenities": [
      //       "Wifi"
      //     ],
      //     "name": "Nid d’oiseau (bis)",
      //     "bathrooms": 1,
      //     "bedrooms": 1,
      //     "bed": 1,
      //     "images": [
      //       "https://a0.muscache.com/im/pictures/7ed4df69-0c79-40da-91fc-890788a5736b.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/58137a59-e491-4820-9c66-483776c7a7a8.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/05dd6d0a-7207-45e8-8300-6b6fac736dc6.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/24393758-90c3-47c8-984b-673f19ec9a7c.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/4e19aab3-c7c7-4eab-bbb5-e02d125c7241.jpg?im_w=720"
      //     ]
      //   },
      //   {
      //     "url": "https://www.airbnb.com/rooms/884051012248829459",
      //     "city": "Paris",
      //     "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=C&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
      //     "persons": 3,
      //     "reviewsCount": 0,
      //     "address": "Paris, Île-de-France, France",
      //     "price": {
      //       "rate": 131,
      //       "currency": "USD",
      //       "total": 131,
      //       "priceItems": [
      //         {
      //           "amount": 108
      //         },
      //         {
      //           "amount": 18
      //         },
      //         {
      //           "amount": 5
      //         }
      //       ]
      //     },
      //     "previewAmenities": [
      //       "Wifi",
      //       "Kitchen",
      //       "Washer"
      //     ],
      //     "name": "Appartement plein coeur Paris",
      //     "bathrooms": 1,
      //     "bedrooms": 1,
      //     "bed": 2,
      //     "images": [
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/3ecb9155-d820-4f63-8e60-72296b63b37c.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/3cc71d2e-267f-4072-9a20-f825dc2939a6.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/ef2a6e9c-9bc3-4b80-acc8-455f1b545bb8.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/204948f6-65b3-4f78-8c50-bc53e46bd68f.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/704f9388-4278-4f03-b319-c17a365afd73.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/dae93091-4bc7-4798-9a60-c3e6bd03d7e1.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-884051012248829459/original/464e96ed-d1fe-4278-8e0e-a5bbc3f5a2e1.jpeg?im_w=720"
      //     ]
      //   },
      //   {
      //     "url": "https://www.airbnb.com/rooms/49651214",
      //     "city": "Neuilly-sur-Seine",
      //     "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e3027851-9df1-4d2b-bdcf-f405a7234994.jpg?aki_policy=profile_x_medium",
      //     "persons": 1,
      //     "reviewsCount": 89,
      //     "rating": 4.34,
      //     "address": "Neuilly-sur-Seine, Île-de-France, France",
      //     "price": {
      //       "rate": 68,
      //       "currency": "USD",
      //       "total": 68,
      //       "priceItems": [
      //         {
      //           "amount": 55
      //         },
      //         {
      //           "amount": 1
      //         },
      //         {
      //           "amount": 9
      //         },
      //         {
      //           "amount": 3
      //         }
      //       ]
      //     },
      //     "previewAmenities": [
      //       "Wifi",
      //       "Kitchen"
      //     ],
      //     "name": "Small apartment close to subway 1",
      //     "bathrooms": 1,
      //     "bedrooms": 1,
      //     "bed": 1,
      //     "images": [
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/81b8b8d4-5d70-4ade-94c0-d1602a1476cf.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/21f5e545-d697-4f72-a5b7-c84b65b25571.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/58dde851-36a5-4e26-acd1-2688c02a6719.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/37abf6a9-c134-40b9-89f5-c22f0184e4b2.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/582c2594-aec6-41b5-8c4d-80c20d13ea4e.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/e4eeb59e-ba4b-4d56-8323-d14a2e34d013.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/f71b4dde-6303-4266-aa83-72603d1e9d16.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/cbc4659f-e28f-4308-957b-3ae2c199d5a9.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/eda298f3-7377-4abf-ba44-da9948529489.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/e9466602-4c66-4380-a244-f50ef5bb348b.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-49651214/original/9531680d-a8f9-448d-8151-18e9743b275d.jpeg?im_w=720"
      //     ]
      //   },
      //   {
      //     "url": "https://www.airbnb.com/rooms/631708056804155314",
      //     "city": "Paris",
      //     "hostThumbnail": "https://a0.muscache.com/im/pictures/user/7ddbcdd5-4f5e-4921-a354-54183c6db1fa.jpg?aki_policy=profile_x_medium",
      //     "persons": 1,
      //     "reviewsCount": 101,
      //     "rating": 4.71,
      //     "address": "Paris, Île-de-France, France",
      //     "price": {
      //       "rate": 81,
      //       "currency": "USD",
      //       "total": 81,
      //       "priceItems": [
      //         {
      //           "amount": 61
      //         },
      //         {
      //           "amount": 5
      //         },
      //         {
      //           "amount": 11
      //         },
      //         {
      //           "amount": 4
      //         }
      //       ]
      //     },
      //     "previewAmenities": [
      //       "Wifi",
      //       "Kitchen",
      //       "Washer"
      //     ],
      //     "name": "Charming 17m2 room in Paris/lovely room Paris",
      //     "bathrooms": 1,
      //     "bedrooms": 1,
      //     "bed": 1,
      //     "images": [
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/fab1f719-a6ea-47ff-90c3-df7abeddb325.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/64e69e7a-50be-4ddf-9013-e0f53e7115de.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/2c1fcb95-7cca-4f34-a0c8-3e02029460b0.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/6c9a69dc-3b1d-4991-b604-d563f7a8aadc.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/74aef3de-1ad8-401e-8300-b433d40adc23.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/57b49f6a-890b-4a51-9fec-d47d22e3380d.jpeg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/miso/Hosting-631708056804155314/original/5e89c902-95ae-46c7-a262-8a89cfa32368.jpeg?im_w=720"
      //     ]
      //   },
      //   {
      //     "url": "https://www.airbnb.com/rooms/53331119",
      //     "city": "Paris",
      //     "hostThumbnail": "https://a0.muscache.com/im/pictures/user/d7d51b3f-b1f1-4e6d-9be0-f7246ef20c04.jpg?aki_policy=profile_x_medium",
      //     "persons": 2,
      //     "reviewsCount": 139,
      //     "rating": 4.93,
      //     "address": "Paris, Île-de-France, France",
      //     "price": {
      //       "rate": 92,
      //       "currency": "USD",
      //       "total": 92,
      //       "priceItems": [
      //         {
      //           "amount": 56
      //         },
      //         {
      //           "amount": 19
      //         },
      //         {
      //           "amount": 13
      //         },
      //         {
      //           "amount": 4
      //         }
      //       ]
      //     },
      //     "previewAmenities": [
      //       "Wifi",
      //       "Kitchen",
      //       "Washer"
      //     ],
      //     "name": "Private room in Caroline's apartment",
      //     "bathrooms": 1,
      //     "bedrooms": 1,
      //     "bed": 1,
      //     "images": [
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/49c8d4fe-efa2-46d1-a6b9-8c7f6e5a4f4b.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/b562f171-c862-46c4-9611-5514abaf6f83.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/4e370a7c-6a7c-4db0-a1e7-2a1b4a2ce9cc.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/29e06ebe-0bea-4e21-b3c5-5b191e71ef59.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/628d118e-3b4c-4867-9312-73e24784484f.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/5bca5f6a-af51-459c-a8f3-db8aed4fa239.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/ed670a86-f6d2-43fe-a34a-39972f5f2b69.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/4093c591-47a2-4ac8-8f48-885fe7f61448.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/5fb6ec59-3594-4b3d-a08a-bb0236781e9a.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/f12346b7-9bbf-40c5-a3dc-0b0fa31effcb.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/111aff20-1441-4c92-a913-a43d81c8a133.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/ea3af973-78c0-4634-bf8c-b0c4ca9cf8d9.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/96474160-9afd-433e-87a4-d152fefee715.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/810b8851-b5e2-4e71-a108-1f7bd32df07c.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/e9c9fa2b-9162-4f18-b379-66188df29927.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/a5bd7c66-4be1-47f6-bc4a-b84530a6c308.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/airflow/Hosting-53331119/original/264e67f6-63a1-48a9-a38d-30b63e9ca1c8.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/6cbb46e9-fcaf-4bd7-85e8-28ba51f31bf6.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/6379aa5f-dca5-42a2-8e39-5803cba9acf0.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/d1bbab39-44b5-46ac-a0db-0338227074b8.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/fa7e6bf5-fd6c-4700-8597-fd9dd530d4c5.jpg?im_w=720",
      //       "https://a0.muscache.com/im/pictures/da602e93-deed-4b42-a14b-9bc527e26f3f.jpg?im_w=720"
      //     ]
      //   },
      //   {
      //     "url": "https://www.airbnb.com/rooms/31361577",
      //     "city": "Seattle",
      //     "hostThumbnail": "https://a0.muscache.com/im/pictures/user/31ce4c98-ec87-458e-8b35-2c9dfed053ad.jpg?aki_policy=profile_x_medium",
      //     "persons": 2,
      //     "reviewsCount": 21,
      //     "rating": 4.9,
      //     "address": "Seattle, WA, United States",
      //     "price": {
      //         "rate": 162,
      //         "currency": "USD",
      //         "total": 162,
      //         "priceItems": [
      //             {
      //                 "amount": 72
      //             },
      //             {
      //                 "amount": 45
      //             },
      //             {
      //                 "amount": 20
      //             },
      //             {
      //                 "amount": 25
      //             }
      //         ]
      //     },
      //     "previewAmenities": [
      //         "Free parking",
      //         "Wifi",
      //         "Kitchen",
      //         "Self check-in"
      //     ],
      //     "name": "Guest Quarters Near UW, Children's, Lake Wash",
      //     "bathrooms": 1,
      //     "bedrooms": 1,
      //     "bed": 1,
      //     "images": [
      //         "https://a0.muscache.com/im/pictures/miso/Hosting-31361577/original/d85e5dac-a785-48d3-879a-c19564fcb9cc.jpeg?im_w=720",
      //         "https://a0.muscache.com/im/pictures/79d5173e-0847-4135-a8b1-0b2a3c6712db.jpg?im_w=720",
      //         "https://a0.muscache.com/im/pictures/miso/Hosting-31361577/original/348af2d8-f607-43ab-b5ec-61cc9c0f0a68.jpeg?im_w=720",
      //         "https://a0.muscache.com/im/pictures/e265c741-e593-4b68-bb8c-06c2c17de1eb.jpg?im_w=720",
      //         "https://a0.muscache.com/im/pictures/28fa33b7-29e0-45fb-bb66-2c79d30ee56d.jpg?im_w=720",
      //         "https://a0.muscache.com/im/pictures/0f14bdbc-f30e-419f-94da-5c112f0c78b9.jpg?im_w=720",
      //         "https://a0.muscache.com/im/pictures/519fc151-15ea-4eb4-98ee-62a8ca8d1224.jpg?im_w=720",
      //         "https://a0.muscache.com/im/pictures/0d226790-534e-4d43-ab5b-7e028f946755.jpg?im_w=720",
      //         "https://a0.muscache.com/im/pictures/7967afc8-f71e-410d-a951-a8b7b77fcdf7.jpg?im_w=720"
      //     ]
      //   }
      // ]
    }
  }

  handleSubmit = (e) => {
    e.preventDefault(); // prevents instant refresh
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    this.getAirbnbs(formObj);
  }

  getAirbnbs = (form) => {
    let requestURL = `${process.env.REACT_APP_SERVER}/airbnb?location=${form.location}&checkin=${form.checkin}&checkout=${form.checkout}&adults=${form.adults}&children=${form.children}&pets=${form.pets}&page=1`;
    axios.get(requestURL)
      .then(response => this.setState({ airbnbData: response.data.slice(0, 8), error: ''}, () => console.log('airbnbData:', this.state.airbnbData))) // Only stores first 8 airbnbs
      .catch(err => this.setState({ error: 'Could not fetch airbnbs. Make sure your checkin/checkout dates are not in the past.' }));
  }

  render() {
    const { trip, editAirbnb } = this.props;
    return (
      <div className="airbnb">
        {this.state.error && <Alert variant="warning">{this.state.error}</Alert>}
        <Card className="airbnb-form" style={{ width: '25rem' }}>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              {/* TODO: Might delete this location formgroup later */}
              <Form.Group>
                <Form.Label>Find An Airbnb</Form.Label>
                <Form.Control type="text" placeholder="Enter location name" name='location' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Check in date</Form.Label>
                <Form.Control type="date" placeholder="2023-01-01" name='checkin' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Check out date</Form.Label>
                <Form.Control type="date" placeholder="2023-01-02" name='checkout' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of adults</Form.Label>
                <Form.Control type="text" defaultValue="1" name='adults' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of children</Form.Label>
                <Form.Control type="text" defaultValue="0" name='children' required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Number of pets</Form.Label>
                <Form.Control type="text" defaultValue="0" name='pets' required />
              </Form.Group>
              <Button variant="primary" type="submit">Find Airbnbs</Button>
            </Form>
          </Card.Body>
        </Card>

        <Row>
          {this.state.airbnbData.length > 0 && this.state.airbnbData.map(airbnb =>
            <Col key={airbnb.url}>
              <AirbnbCard airbnb={airbnb} trip={trip} editAirbnb={editAirbnb}/>
            </Col>
          )}
        </Row>
      </div>
    )
  }
}

export default Airbnb;