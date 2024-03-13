import {useState} from "react";
import AdminLoginPage from "./admin/AdminLoginPage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    // 여기에서는 단순히 로그인 된 사용자를 상태에 설정합니다.
    setLoggedInUser(username);
  };

  return (
      <div>
        {loggedInUser ? (
            <div>
              <p>Welcome, {loggedInUser}!</p>
              {/* 여기에 로그인 된 사용자를 위한 관리자 페이지 컴포넌트를 추가합니다. */}
            </div>
        ) : (
            <div>
              <h2>Login</h2>
              <AdminLoginPage onLogin={handleLogin} />
            </div>
        )}
      </div>
  );
}

export default App;
