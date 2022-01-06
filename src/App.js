import { Route, Routes, Navigate } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="welcome"/>} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Component A
// our-domain.com/products => Component B 
// 도메인을 따라 경로를 설정함. 도메인을 따르는 문자가 각기 다른 컴포넌트를 화면에 로드함
// url에 무엇이 있는지 확인하고 state를 설정함. 링크클 릭을 감지하는 곳에서는
// 기본 브라우저가 요청을 보내는 것을 막고 대신 state를 변경해서 화면에 다른 것을 렌더링함
// 이것을 직접 할 수도 있지만 react-router-dom third-party package를 통해 함
// 1. react-router-dom에서 { Route } component를 불러옴
// Route component는 특정 경로를 정의할 수 있게 해줘서 그 특정 경로가 url에서 활성화 되면
// React component를 로딩할 수 있음

//App.js에서 두 컴포넌트를 렌더링하고 싶음
//이때 Route 컴포넌트를 사용해 페이지로 로드하고 싶음
//이를 위해 App 컴포넌트에서 Route 컴포넌트를 등록하고
//특별한 prop인 path를 사용함

//만일 path="/welcome"이 들어가면 이 route는 현재 경로가 our-domain.com/welcome일 때 활성화 됨
//이때 렌더링 되어야 할 컴포넌트는 <Route></Route> 사이에 넣어주면 됨

//app을 redering하는 root 컴포넌트인 index.js로 가야 함
//거기에서 import { BrowserRouter } from 'react-router-dom';을 불러와야 함

//header를 만들어 각 메뉴를 클릭할 시 각 메뉴에 해당하는 페이지가 렌더링되도록 했으나
//페이지가 reloading 되버림. 즉 브라우저의 요청이 페이지가 바뀔 때마다 이루어진 다는 것.
//싱글 페이지 앱을 만들고자 하므로 요청이 보내지는 것을 막아야 함
//메뉴에 click 이벤트를 부여하여 막을 수도 있지만 react-router-dom에서 { Link } component를 불러와 링크를 만들 수 있음
//<a>태그를 <Link> component로, href prop을 to prop으로 대체해줌

//active 상태인 Link를 하이라이트 해주기 위해 { Link } 대신 { NavLink }를 사용할 수 있음
//NavLink는 active anchor 아이템에 css class를 설정함 - activeClassName prop을 이용함
//v5 <NavLink activeClassName={classes.active} />
//v6 버전에서 NavLink style을 부여할 방법을 찾아야 함

//제품 상세 페이지를 로드하고자 할 때 제품에 각각에 맞는 상세 정보를 나타내는 페이지를 연결하고 로드하도록 할 수 있는데
//이때 경로를 지정하는 것이 복잡하다. 모두에게 경로를 일일이 지정할 수 없으므로
//path="/product-detail"과 같은 하나에서 파생되는
//path="/product-detail/:productId"와 같이 부여해 줄 수 있다.
//여기서 두번째 / 뒤는 아무거나 올 수 있는데 이때 콜론 : 이 꼭 필요하다.
//productId는 해당 컴포넌트에서 지정해줄 것이다. 
//이것이 바로 dynamic route, dynamic path, dynamic sagement이다.
//필요하다면 path="/product-detail/:productId/:anotherId" 처럼 여러 sagement를 만들 수 있다.

//v6버전의 nested route, 즉 중첩 라우트를 확인해봐야 함
//<Route path="/products" element={<Products />}>
//  <Route path=":productId" element={<ProductDetail />} />
//</Route>
//v5
//<Route path="/products" element={<Products />} />
//<Route path="/products/:productId" element={<ProductDetail />} />

//user redirect - 사용자를 다른 곳으로 리다이렉트 하는 것이다.
//react-router-dom에서 { Redirect }를 불러온 다음 경로가 "/"로 지정된 Route에 element prop의 value로 Redirect component를 넣어준다.
//이때 to prop을 사용해서 <Redirect to="/welcome" />과 같이 리다이렉트 될 경로를 지정해주어야 한다.
//v6에서는 Redirect가 사라졌다. Navigate를 사용하고 
//<Navigate replace to="" />와 같이 replace와 to="url" 속성을 넣어서 Redirect 처럼 사용한다.