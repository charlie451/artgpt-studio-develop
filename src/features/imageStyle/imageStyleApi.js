import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imageStyleApi = createApi({
  reducerPath: 'imageStyleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://211.43.13.139/api/style/' }),
  endpoints: (builder) => ({
    getStylelist: builder.query({
      //   query: (name) => `pokemon/${name}`,
      query: () => 'list',
    }),
  }),
});

// 기능적 구성요소에 사용하기 위해 후크를 내보냅니다.
// 정의된 엔드포인트를 기반으로 자동 생성됨
export const { useGetStyleListQuery } = imageStyleApi;
