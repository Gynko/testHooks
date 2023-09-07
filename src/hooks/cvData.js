import { useState } from "react";

export function useCvData(data) {
  const [infos, setInfos] = useState({ ...data });
  const [competences, setCompetences] = useState([]);
  console.log("infos", infos, "comp", competences);
  return { infos, setInfos, competences, setCompetences };
}
