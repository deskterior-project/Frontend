## 패키지

🚀 Next.js 🎨 TailwindCSS 🗂️ Zustand 🌐 TanStack Query 🌐 Axios 📑 React-Hook-Form 📑 Zod 🧰 SVGR 🎨 Radix

## 브랜치 컨벤션

- main
- dev
- ui | feat | api
- fix

## 커밋 컨벤션

- feat: 새로운 기능을 추가할 경우
- design: CSS 등 사용자 UI 디자인 변경
- style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
- fix: 버그를 고친 경우
- refactor: 프로덕션 코드 리팩토링
- comment: 필요한 주석 추가 및 변경
- docs: 문서를 수정한 경우
- test: 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
- chore: 빌드 테스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)
- rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
- remove: 파일을 삭제하는 작업만 수행한 경우
- !HOTFIX: 급하게 치명적인 버그를 고쳐야하는 경우

## 코드 컨벤션

### 컴포넌트, 함수 
→ arrow function

### 함수명 
→ ex) handleClick, handleSubmit

### 네이밍
- 파일명: `PascalCase` (`userProfile.tsx`)
- 컴포넌트: `PascalCase` (`UserCard.tsx`)
- 유틸 및 변수: `camelCase` (`isAuth`)
- hooks: `use` 접두사 (`useAuth.ts`)
- types/interface: `PascalCase` (`PageProps`, `AuthResponse`)
- 상수: `SCREAMING_SNAKE_CASE`
  
## 프로젝트 구조
- `apis/` → API 클라이언트 및 React Query 훅
- `app` → Next.js App Router 페이지 & 라우트 구조
- `assets` →  정적 리소스
- `components/section` → 특정 페이지 내 섹션 단위 컴포넌트
- `components/ui` → 재사용 가능한 공용 UI 컴포넌트
- `constants/` → 상수
- `hooks/` → 커스텀 훅
- `providers/` → 전역에서 한 번만 감싸서 사용하는 글로벌 Provider 모음
- `utils/` → 유틸 함수
- `types/` → 전역 타입 정의
- `store/` → 상태 관리 (Zustand)
- `styles/` → 전역 스타일  
