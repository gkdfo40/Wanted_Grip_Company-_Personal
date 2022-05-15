# 2022 _ Grip Company 개인 과제

+ 프로젝트 기간: **2022/05/10 ~ 2022/05/15**

```
  src
    ├─assets
    │  └─svgs
    │      └─weather
    ├─components
    │  ├─BookMark
    │  ├─Grip
    │  ├─ItemCard
    │  ├─Modal
    │  ├─Movie
    │  ├─SearchBar
    │  └─TabBar
    ├─hooks
    │  └─worker
    ├─routes
    ├─services
    ├─states
    ├─styles
    │  ├─base
    │  ├─constants
    │  └─mixins
    ├─types
    └─utils
```

<br/>

## Description

+ 영화를 검색하고 즐겨찾기로 등록 할 수 있는 앱을 구현합니다.
검색한 영화는 스크롤을 통해 다음 페이지를 검색합니다.

+ 즐겨찾기한 영화는 localStorage에 저장하여, 다음에 접속 했을 때, 즐겨찾기 조회가 되고 Drag&Drop을 통해 우선순위 변경이 가능합니다.

<br/>

## Environment

> vsCode

> Node.js Version 14 이상

> React Version 17 이상

<br/>

## Prerequire

`npm i -g typescript `

`npm i recoil`

`npm i react-intersection-observer`

<br/>

## Files

`ItemCard`: 영화를 더블클릭하여 즐겨찾기|취소 선택 창(`Modal`)이 뜹니다.

`Modal`: 즐겨찾기|취소 button을 클릭하여 즐겨찾기 된 영화 목록을 수정합니다.

`BookMark`: Drag&Drop 기능으로 즐겨찾기 목록 순서를 수정합니다.

`Movie`: 검색된 결과가 존재한다면 스크롤을 통해 다음 결과를 가져옵니다.

