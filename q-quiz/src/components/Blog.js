import React from 'react'
import {
    Container,
} from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div className="card my-5">
                <div className="card-header bg-dark text-white fs-3">
                    What is the purpose of react router ?
                </div>
                <div className="card-body">
                    <p className="card-text">React Router is a standard library for routing in React. Client side routing allows app to update the URL from a link click without making another request for another document from the server. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Client side routing allows your app to update the URL from a link click without making another request for another document from the server.</p>
                    <a href="https://reactrouter.com/en/main" target="_blank" className="btn btn-outline-info mb-3 fs-5">See More</a>
                </div>
            </div>
            <div className="card my-5">
                <div className="card-header bg-dark text-white fs-3">
                    How does context Api Work ?
                </div>
                <div className="card-body">
                    <p className="card-text">The new Context  API solves one major problem, which is prop drilling.  Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. The Context is a built-in API introduced in ​​React 16.3, Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                    <a href="https://beta.reactjs.org/apis/react/createContext" target="_blank" className="btn btn-outline-info mb-3 fs-5">See More</a>
                </div>
            </div>
            <div className="card my-5">
                <div className="card-header bg-dark text-white fs-3">
                    Use of useRef() Hook
                </div>
                <div className="card-body">
                    <p className="card-text">The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                    <a href="https://beta.reactjs.org/apis/react/useRef#useref" target="_blank" className="btn btn-outline-info mb-3 fs-5">See More</a>
                </div>
            </div>
        </Container>
    )
}

export default Blog