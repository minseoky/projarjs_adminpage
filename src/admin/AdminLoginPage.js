import {useState} from "react";


function AdminLoginPage({onLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // 여기에서는 단순히 예제를 위해 username과 password를 콘솔에 출력합니다.
        console.log('Username:', username);
        console.log('Password:', password);
        // 여기에 로그인 API 호출 등의 로직을 추가할 수 있습니다.
        // 실제로는 서버와의 통신을 통해 로그인을 처리해야 합니다.

        // 로그인 후에 어떤 작업을 할지에 대한 로직을 호출합니다.
        // 이 예제에서는 부모 컴포넌트로 콜백을 호출하여 처리할 수 있습니다.
        onLogin(username);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default AdminLoginPage;