"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Main from "../_component/Main";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/i/flow/login");
  }, [router]);

  return (
    <>
      <Main />
    </>
  );
}

// router.push 사용 시 주의사항
// localhost:3000 ->
// 이동 후에 이전 페이지로 돌아가기 가능

// router.replace
// localhost:3000 -> localhost:3000/login
// 이동 후에 이전 페이지로 돌아가기 불가능
