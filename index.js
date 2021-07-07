import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Main from './App';
import Test from './test';
import Container from './exmples/Container';
class Root extends React.Component {

  state = {
    resData: ''
  }

  componentDidMount = async () => {
    try {
      const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffreefrontend.com%2Findex.xml")
        .then(res => res.json());

      this.setState({
        resData: response.items
      })
    } catch (error) {
      console.error(error);
    }
  }

  renderData = () => {
    const { resData } = this.state
    var content = '';
    if (resData) {
      content = resData.map(data => {
        return (
          <div className="result" key={data.title}>
            <div className="title">{data.title}</div>
            <div className="content">
              {data.content}
            </div>
            <div className="link">{data.link}</div>
          </div>
        )
      })
    }
    return content;
  }

  render = () => {
    //동기함수만 정의해야 함

    return (
      <>
        <Main />
        {
          this.renderData()
        }
        <Test />
        <Container />
      </>
    )
  }
}

ReactDOM.render(<Root />,
  document.getElementById('root'));

reportWebVitals();

export default Root;

/*
const literalEx = <div tableIndex="0"></div>;
const jsExp = <img src={user.imgSrc}></img>;
const noneChild = <img src={user.srcUrl} />;
// const injectionPrev = response.potentiallyMaliciousInput;
const useInjection = <div>injectionPrev</div>;
*/
/*
    1. element가 const일 때:
    <Test/> 딱 처음에 render된 후
     1초마다
     Error: Element type is invalid:
      expected a string (for built-in components)
      or a class/function (for composite components)
      but got: object. 에러 발생

      2. element가 function일 때:
      <Test/> 딱 처음에 render된 후
      빈 화면
      console에러
      index.js:1
      Warning: Functions are not valid as a React child.
      This may happen if you return a Component
      instead of <Component /> from render.
      Or maybe you meant to call this function
      rather than return it.

      즉, 위에서 object였던 것은 const의 element였음

      2-1. error 내용대로 <Element/>로 수정:
      <Test/> 딱 처음에 render된 후
      1초마다
      Error: Element(...): Nothing was returned from render.
      This usually means a return statement is missing.
      Or, to render nothing, return null.

      2-2. error 내용대로 Element의 내부를 return으로 수정:
      1의 에러가 발생하며 추가적 에러 발생
      Check the render method of `Element`.

      2-2-1. return 대신 render()로 수정:
      <Test/> 딱 처음에 render된 후
      1 초마다
      TypeError: Object(...)(...) is not a function

      return과 render의 차이는?
      component인 경우 render해야 함으로 보임.
      return문이 없는 function은 취급하지 않음.

      2-3. return과 render를 모두 기술:
      render 내부에 별도의 내용을 작성할 수 없음 (<- 이 때 파라미터로 넘기려고 했던 거 아닌가...)&
      2-2가 다시 발생.

    3. element의 내용을 return하고
      <NowTime/>으로 render:
      <Test/> render 없이 1이 다시 발생,
      매초마다 발생하지는 않음.
      & 'render' is defined but never used
      & index.js:1 Warning: React.jsx: type is invalid
       -- expected a string (for built-in components)
        or a class/function (for composite components)
         but got: <Welcome />. Did you accidentally export
          a JSX literal instead of a component?
    at NowTime
      3-1. call this function
      rather than return it.의 의미는?
      function과 component의 차이에서
      render()를 할 수 있는 건 component 뿐인 것으로 생각됨.
      현재까지는.

      */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

