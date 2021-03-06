# Carousel Slide

- Made Carousel slide with React (hooks)
- No use other slide library

## 프로젝트 개요

- 희망하는 프론트엔드 라이브러리/프레임워크를 이용한 캐러셀 슬라이드 구현

## 요구사항

- [x] 1. Carousel은 한쪽 방향으로 가로 슬라이드 하며 이미지를 보여주는 컴포넌트입니다.
- [x] 2. photos의 첫 번째 데이터를 첨부한 html 마크업 파일처럼 이미지와 제목을 보여줍니다.
- [x] 3. 5초마다 photos의 다음 데이터를 사용하여 이미지를 보여줍니다.
- [x] 4. (1) 이때 이미지는 이전 이미지와 붙어서 자연스럽게 왼쪽으로 슬라이딩되어야 합니다. (2) 이미지의 슬라이딩이 완료되면 해당 하단의 제목도 해당 데이터의 제목으로 바뀝니다.
- [x] 5. photos의 맨 마지막 데이터에 도달하였을 때 다음 이미지로 첫 번째 데이터의 이미지를 보여주며 이때부터 다시 3번과 같이 무제한으로 반복하여 이미지를 보여줍니다.
- [x] 6. 하단의 “>” 버튼을 클릭하면 (1) 다음 데이터를 사용하여 이미지를 자연스럽게 왼쪽으로 슬라이딩하며 보여줍니다. 다음 이미지로 넘어가면 다시 0초부터 카운트가 시작됩니다. (2) 이후 3번과 같이 무제한으로 반복하여 이미지를 보여줍니다.
- [x] 7. 하단의 “<“ 버튼을 클릭하면 (1) 이전 데이터를 사용하여 이미지를 자연스럽게 오른쪽으로 슬라이딩하며 이미지를 보여줍니다. 다음 이미지로 넘어가면 다시 0초부터 카운트가 시작되며, (2) 다시 3번과 같이 무제한으로 반복하여 이미지를 보여줍니다.
- [x] 8. 이미지 삭제 영역에서 삭제할 이미지의 id를 적고 삭제 버튼을 누르면 photos에서 해당 id를 가진 데이터가 사라지고 Carousel에서도 해당 이미지가 사라집니다.

## Components

- 주요 컴포넌트는 `useCarousel`, `StyledComponents`, `Image` 입니다.
- `useCarousel`: Arrow Event, AutoPlay Event 구현
- `StyledComponents`: `useCarousel`의 요소에 대한 style 컴포넌트
- `Image`: 각 이미지에 대한 style 컴포넌트

## Walkthrough

- 이미지들을 `display:flex`로 나열하고, `Repaint` 최적화를 위해 `transform: translateX()`속성으로 이동시켰습니다.
- `3`번 항목은 `useEffect`와 `setInterval`을 이용하여 5초마다 이동하도록 구현하였습니다.
- 첫 구현 때 `4-(2)`번 항목을 잘못 이해하여 이미지가 이동할 때 타이틀도 함께 이동하도록 하였습니다. 현재는 타이틀을 밑으로 빼고 이미지가 이동하면 타이틀이 바뀌도록 수정하였습니다.
- `5`번 항목은 [마지막이미지, ...전체 이미지, 첫번째 이미지]로 이미지 배열을 수정하여 `첫번째 이미지`, `마지막 이미지`의 인덱스를 체크하고 `transition`값 없이 `translateX`값을 다른 `첫번째 이미지`, `마지막 이미지`의 위치로 수정하였습니다.

## Preview

![image](https://user-images.githubusercontent.com/25483027/66541220-7e9fb500-eb69-11e9-9359-a9063a388ffd.png)

- Try it: https://jovial-fermi-f2ba40.netlify.com

## 참고

- https://im-developer.tistory.com/97
- https://medium.com/@claudiaconceic/infinite-plain-javascript-slider-click-and-touch-events-540c8bd174f2
- https://swiperjs.com/demos/210-infinite-loop-with-slides-per-group.html
