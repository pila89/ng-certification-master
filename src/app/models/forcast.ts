export interface Forcast {
  essage?: number;
  cnt?: number;
  liscod?: string;
  mt?: [
    {
      dt?: number;
      main?: {
        temp?: number;
        feels_like?: number;
        temp_min?: number;
        temp_max?: number;
        pressure?: number;
        sea_level?: number;
        grnd_level?: number;
        humidity?: number;
        temp_kf?: number;
      };
      weather?: [
        { id?: number; main?: string; description?: string; icon?: string }
      ];
      clouds?: { all?: number };
      wind?: { speed?: number; deg?: number; gust?: number };
      visibility?: number;
      pop?: number;
      sys?: { pod?: string };
      dt_txt?: string;
    }
  ];
  city?: {
    id?: number;
    name?: string;
    coord?: { lat?: number; lon?: number };
    country?: string;
    population?: number;
    timezone?: number;
    sunrise?: number;
    sunset?: number;
  };
}



// export interface Forcast {
//     city: {
//       id?: number;
//       name?: string;
//       coord?: { lon: number; lat: number };
//       country?: string;
//       population?: number;
//       timezone?: number;
//     };
//     cod?: string;
//     message?: number;
//     cnt?: number;
//     list?: [
//       {
//         dt?: number;
//         sunrise?: number;
//         sunset?: number;
//         temp?: {
//           day?: number;
//           min?: number;
//           max?: number;
//           night?: number;
//           eve?: number;
//           morn?: number;
//         };
//         feels_like?: { day: number; night: number; eve: number; morn: number };
//         pressure?: number;
//         humidity?: number;
//         weather?: [
//           { id?: number; main?: string; description?: string; icon?: string }
//         ];
//         speed?: number;
//         deg?: number;
//         gust?: number;
//         clouds?: number;
//         pop?: number;
//       }
//     ];
//   }
  
