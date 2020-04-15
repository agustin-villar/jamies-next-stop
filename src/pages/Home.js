import React from 'react';
import Form from "../components/Form";

function Home() {
    return (
        <div>
            <header>
                <h1>Hello Jamie!</h1>
                <p>What will be your next destination?</p>
            </header>
            <main>
                <Form onSubmit={(data) => console.log(data)}/>
            </main>
            <footer>
                Bon voyage ! <span role="img" aria-label="wave emoji">👋</span>
            </footer>
        </div>
    );
}

export default Home;
