import React, { useState, useEffect } from "react";
import SignupForm from "./SignupForm";
import tagService from "../../services/tagService";

import {useAuth} from "../../customHooks/use-auth"

function SignupPage(props) {

  const auth = useAuth()

  const [tags, setTags] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      setTags(await tagService.getAllTags());
    };
    fetchData();
  }, []);

  const handleUserSubmitted = async userInfo => {
    try {
      await auth.signup(userInfo);
      props.history.push({
        pathname: "/login",
        state: {from: "/signup"}
      });
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <h1 className="brand-text text-center">Create an account</h1>
      <hr />
      <SignupForm onUserSubmitted={handleUserSubmitted} tags={tags} />
    </>
  );
}

export default SignupPage;
