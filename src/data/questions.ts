export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es la unidad de medida de la carga eléctrica en el Sistema Internacional?",
    options: ["Voltio (V)", "Coulomb (C)", "Ampere (A)", "Ohm (Ω)"],
    correctAnswer: 1,
    explanation: "El Coulomb (C) es la unidad de carga eléctrica en el SI."
  },
  {
    id: 2,
    question: "La Ley de Coulomb describe la fuerza entre:",
    options: ["Dos masas", "Dos cargas eléctricas", "Dos imanes", "Dos corrientes"],
    correctAnswer: 1,
    explanation: "La Ley de Coulomb describe la fuerza electrostática entre cargas eléctricas."
  },
  {
    id: 3,
    question: "¿Qué magnitud física se mide en Tesla (T)?",
    options: ["Campo eléctrico", "Campo magnético", "Corriente eléctrica", "Resistencia"],
    correctAnswer: 1,
    explanation: "El Tesla (T) es la unidad de medida del campo magnético."
  },
  {
    id: 4,
    question: "En un circuito RC, ¿qué componente almacena energía en forma de campo eléctrico?",
    options: ["Resistencia", "Capacitor", "Inductor", "Batería"],
    correctAnswer: 1,
    explanation: "El capacitor almacena energía en forma de campo eléctrico."
  },
  {
    id: 5,
    question: "La Ley de Faraday relaciona:",
    options: ["Corriente y resistencia", "Campo eléctrico y carga", "Flujo magnético variable y fem inducida", "Voltaje y potencia"],
    correctAnswer: 2,
    explanation: "La Ley de Faraday establece que un flujo magnético variable induce una fem."
  },
  {
    id: 6,
    question: "¿Qué expresa la Ley de Ampère?",
    options: ["La relación entre voltaje y corriente", "Que la corriente eléctrica genera campo magnético", "La conservación de la carga", "La resistencia de un conductor"],
    correctAnswer: 1,
    explanation: "La Ley de Ampère establece que una corriente eléctrica produce campo magnético."
  },
  {
    id: 7,
    question: "En las ondas electromagnéticas, los campos eléctrico y magnético son:",
    options: ["Paralelos entre sí", "Perpendiculares entre sí", "Opuestos en fase", "Independientes"],
    correctAnswer: 1,
    explanation: "En ondas EM, los campos E y B son perpendiculares entre sí y a la dirección de propagación."
  },
  {
    id: 8,
    question: "¿Cuál es la velocidad de propagación de las ondas electromagnéticas en el vacío?",
    options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
    correctAnswer: 1,
    explanation: "Las ondas electromagnéticas viajan a c = 3 × 10⁸ m/s en el vacío."
  },
  {
    id: 9,
    question: "¿Qué componente de un circuito se opone a cambios en la corriente?",
    options: ["Resistencia", "Capacitor", "Inductor", "Diodo"],
    correctAnswer: 2,
    explanation: "El inductor se opone a cambios en la corriente debido a la auto-inducción."
  },
  {
    id: 10,
    question: "La reactancia capacitiva aumenta cuando:",
    options: ["La frecuencia aumenta", "La frecuencia disminuye", "La capacitancia aumenta", "El voltaje aumenta"],
    correctAnswer: 1,
    explanation: "La reactancia capacitiva Xc = 1/(2πfC) disminuye con la frecuencia, por lo que aumenta cuando f disminuye."
  },
  {
    id: 11,
    question: "En un transformador ideal, si la relación de vueltas es 10:1, el voltaje en el secundario será:",
    options: ["10 veces mayor", "10 veces menor", "Igual", "100 veces menor"],
    correctAnswer: 1,
    explanation: "Con relación 10:1, el voltaje del secundario es 10 veces menor que el primario."
  },
  {
    id: 12,
    question: "¿Cuál de las siguientes NO es una ecuación de Maxwell?",
    options: ["Ley de Gauss para E", "Ley de Gauss para B", "Ley de Faraday", "Ley de Ohm"],
    correctAnswer: 3,
    explanation: "La Ley de Ohm no es una de las cuatro ecuaciones de Maxwell."
  },
  {
    id: 13,
    question: "El fenómeno de interferencia de ondas puede ser:",
    options: ["Solo constructivo", "Solo destructivo", "Constructivo o destructivo", "Inexistente en ondas EM"],
    correctAnswer: 2,
    explanation: "La interferencia puede ser constructiva (amplifica) o destructiva (cancela)."
  },
  {
    id: 14,
    question: "¿Qué tipo de onda NO requiere un medio material para propagarse?",
    options: ["Onda sonora", "Onda en una cuerda", "Onda electromagnética", "Onda sísmica"],
    correctAnswer: 2,
    explanation: "Las ondas electromagnéticas pueden propagarse en el vacío."
  },
  {
    id: 15,
    question: "La impedancia de un circuito RLC en serie se calcula como:",
    options: ["Z = R + XL + XC", "Z = √(R² + (XL - XC)²)", "Z = R × XL × XC", "Z = R / (XL + XC)"],
    correctAnswer: 1,
    explanation: "La impedancia es Z = √(R² + (XL - XC)²) en un circuito RLC serie."
  },
  {
    id: 16,
    question: "En resonancia, un circuito RLC serie tiene:",
    options: ["Impedancia máxima", "Impedancia mínima", "Corriente mínima", "Voltaje cero"],
    correctAnswer: 1,
    explanation: "En resonancia, XL = XC, por lo que Z = R (mínima) y la corriente es máxima."
  },
  {
    id: 17,
    question: "El efecto Doppler en ondas electromagnéticas se observa cuando:",
    options: ["La fuente está en reposo", "Hay movimiento relativo entre fuente y observador", "La frecuencia es constante", "No hay medio de propagación"],
    correctAnswer: 1,
    explanation: "El efecto Doppler ocurre cuando hay movimiento relativo entre fuente y observador."
  },
  {
    id: 18,
    question: "¿Cuál de estas ondas tiene la mayor frecuencia?",
    options: ["Ondas de radio", "Microondas", "Rayos X", "Luz visible"],
    correctAnswer: 2,
    explanation: "Los rayos X tienen mayor frecuencia que las otras opciones del espectro EM."
  },
  {
    id: 19,
    question: "La potencia disipada en una resistencia se calcula como:",
    options: ["P = V / I", "P = V × I", "P = I / V", "P = V + I"],
    correctAnswer: 1,
    explanation: "La potencia disipada es P = V × I = I²R = V²/R."
  },
  {
    id: 20,
    question: "En un conductor en equilibrio electrostático, el campo eléctrico en su interior es:",
    options: ["Máximo", "Variable", "Cero", "Igual al exterior"],
    correctAnswer: 2,
    explanation: "En equilibrio electrostático, el campo eléctrico dentro de un conductor es cero."
  }
];
