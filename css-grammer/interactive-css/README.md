## 인터랙티브 CSS

**transform**
```js
transform : {속성값}
    //2D
    - scale : 선택한 요소의 크리를 확대 축소함 1보다 크면 확대, 작으면 축소
    - skew : x,y축으로 비틀어 변형
    - translate : x,y축으로 이동
    - rotate : 회전시킴

    //3D
    - rotateX, rotateY : x, y축으로 3d로 회전
    - translateZ : Z축으로 입체감있게 보이면서 이동

perspective: {number}px;
    - 원금감을 수치만큼 부여

transform-style : preserve-3d
    - 3d효과 적용된 요소에 모션처리를 하면 3d가 풀리는데 이때 3d를 유지시켜줌

transform-origin : {가로축, 세로축}
    - ex) center center : 제시된 중심축을 기준으로 변경할 수 있음
```

**transition**
```css
transition-property: {속성명} - 전환효과 속성
    - all : 전체속성
    - transform opacity

transition-duration: {숫자}s
    - 지속시간

transition-delay: {숫자}s
    - 지연 시간 이후 동작

transition-timing-function: {속성명}
    - linear : 등속 효과
    - ease : 가속 효과
    - ease-in : 모션 시작시 가속
    - ease-out : 모션 종료 시 가속
    - ease-in-out : 모션 시작,종료 시 모두 가속
    - cubic-bezier : 사용자가 지정한 가속효과 적용

transition : 모든효과 한번에 축약해서 사용가능
```

**animation**
```css
@keyframes 애니메이션 세트지정 
    - 애니메이션의 시작과 끝을 설정 : 0%는 시작 100% 끝을 의미 - 단계별 

animation : 이름/진행시간/가속도/지연시간/반복횟수 지정
animation-name : keyframe등록한 애니메이션 이름 호출
animation-duration: 키프레임 모션 한세트를 얼마 동안 동작하게 할지 (s)
animation-timing-function: 가속도설정
animation-iteration-count: 반복 횟수(무한은 infinite)
animation-delay: 지연시간
animation-play-state: running/paused
    - 모션 진행/스탑 설정가능
```

**flex**

```css
display : {속성명}
    - flex : 자신은 block 속성, 자식 요소에 flex 환경 설정
    - inline-flex : 자신을 인라인 속성, 자식요소에 flex 환경 설정

flex-direction : {속성명}
    - row : flex의 기본축 가로
    - column : 세로
    - row-reverse : 가로 역순
    - column-reverse : 세로 역순

flex-wrap : {속성명}
    - nowrap : 자식 요소의 줄 바꿈 진행
    - wrap : 자식 요소의 줄 바꿈

flex-flow : row wrap 
    - flex-direction, flex-wrap 축약문
```