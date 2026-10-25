"use client";

import { useState } from "react";
import { AppointmentModal } from "@/components/appointment-modal";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { Philosophy } from "@/components/philosophy";
import { Reviews } from "@/components/reviews";
import { SiteHeader } from "@/components/site-header";
import { Treatments } from "@/components/treatments";

export default function HomePage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  return (
    <main>
      <SiteHeader onAppointment={() => setAppointmentOpen(true)} />
      <Hero onAppointment={() => setAppointmentOpen(true)} />
      <Philosophy />
      <Treatments onAppointment={() => setAppointmentOpen(true)} />
      <Reviews />
      <Location />
      <Footer onAppointment={() => setAppointmentOpen(true)} />
      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </main>
  );
}
