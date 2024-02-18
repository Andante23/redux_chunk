import { LetterHeader } from "components/LetterHeader";

import { LetterInputForm } from "components/LetterInputForm";
import { GlobalStyle } from "style/GlobalStyle";

/* Home : 메인 페이지 컴포넌트 */
const HomePage = () => {
  return (
    <>
      <GlobalStyle />
      <LetterHeader />
      <LetterInputForm />
    </>
  );
};

export default HomePage;
