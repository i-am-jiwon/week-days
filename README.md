# week-days

간단한 TypeScript 유틸리티: 실행하면 오늘이 속한 ‘이번 주’ 월~금 날짜를 `m.dd(월)` 형식으로 반환합니다.

## 동기

TypeScript 라이브러리를 처음부터 작성하고 배포하는 연습용 프로젝트입니다.


## 1. TypeScript 프로젝트 시작하기

> 아직 코드 구현에 들어가기 전, **TypeScript 환경**을 처음부터 세팅하는 단계입니다.

### 1-1) 디렉터리 & 패키지 초기화
```bash
mkdir week-days && cd week-days   # 새 프로젝트 폴더
npm init -y                       # package.json 생성
```

### 1-2) TypeScript 의존성 설치
```bash
npm i -D typescript
```

### 1-3) `tsconfig.json` 생성
```bash
npx tsc --init \
  --rootDir src \
  --outDir dist \
  --target ES2020 \
  --module commonjs \
  --esModuleInterop true
```


### 1-5) `package.json` 스크립트 추가
```jsonc
{
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch",
  },
}
```

---
다음 단계(2)에서는 `getThisWeek` 함수를 구현하고 테스트 코드를 추가할 예정입니다.


