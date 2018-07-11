import React from "react";

import Steps from "../components/Steps";
import ReserveName from "../components/ReserveName";
import MainLayout from "../components/MainLayout";

export default function ReserveNamePage() {
  return (
    <MainLayout>
      <Steps />
      <ReserveName />
    </MainLayout>
  );
}
