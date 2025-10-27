import { Button } from "@/components/ui/button";
import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";
import { TrendingUp, Award, Users, Brain, ChartNetwork } from "lucide-react";
import scrollToSection from "@/sections/Header/header";

const icones = [
  { id: 1, Icon: ChartNetwork, label: "Análise de Dados" },
  { id: 2, Icon: Users, label: "Parceiros Diversos" },
  { id: 3, Icon: Award, label: "Projetos Inovadores" },
  { id: 4, Icon: Brain, label: "Suporte a Decisões" },
];

const chartData = [
  { value: 0 },
  { value: 8 },
  { value: 12 },
  { value: 18 },
  ...icones.flatMap(({ id, label }) => [
    { value: id * 20 + 5, highlight: true, icon: id, label },
    { value: id * 20 + 10 },
  ]),
  { value: 100 },
];

const iconsize = 25;

const CustomDot = ({ cx, cy, payload, index }) => {
  if (!payload.highlight) return null;

  const found = icones.find((item) => item.id === Number(payload.icon));
  const Icon = found ? found.Icon : TrendingUp;
  const animationDelay = index * 0.2;

  return (
    <g>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .float-animation {
            animation: float 5s ease-in-out infinite;
          }
        `}
      </style>
      <circle
        cx={cx}
        cy={cy}
        r={iconsize * 1.1}
        fill="#733EEC"
        opacity={0.2}
        className="float-animation"
        style={{ animationDelay: `${animationDelay}s` }}
      />
      <circle
        cx={cx}
        cy={cy}
        r={iconsize * 0.8}
        fill="white"
        stroke="#733EEC"
        strokeWidth={2}
        className="float-animation"
        style={{ animationDelay: `${animationDelay}s` }}
      />
      <foreignObject
        x={cx - iconsize / 2}
        y={cy - iconsize / 2}
        width={iconsize}
        height={iconsize}
        className="float-animation"
        style={{ animationDelay: `${animationDelay}s` }}
      >
        <Icon size={iconsize} color="#733EEC" />
      </foreignObject>
    </g>
  );
};

function Hero() {
  return (
    <div className="flex relative w-full p-25 overflow-hidden">
      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col gap-4 justify-center w-xl">
        <h1 className="font-bold text-5xl">
          Laboratório de Suporte à <span className="">Tomada de Decisões</span>
        </h1>
        <p className="text-[#6b6b8c] text-xl font-[350]">
          Desenvolvemos métodos inovadores de suporte à tomada de decisão
          através de pesquisa aplicada, soluções tecnológicas e parcerias
          estratégicas com diversos parceiros!
        </p>

        <div className="flex flex-row gap-2">
          <Button>Conheça nossos projetos</Button>
          <Button variant="outline" className="hover:bg-secondary">
            Ver publicações
          </Button>
        </div>

        <ul className="flex flex-col gap-2 mt-4">
          {icones.map(({ id, Icon, label }) => (
            <li
              key={id}
              className="flex items-center gap-2 text-[#733EEC] font-medium"
            >
              <Icon size={18} />
              {label}
            </li>
          ))}
        </ul>
      </div>

      {/* Gráfico de fundo */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 z-0">
        <ResponsiveContainer width="105%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 60, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5743E6" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#733EEC" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <YAxis domain={[0, "dataMax"]} hide />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#733EEC"
              strokeWidth={2}
              fill="url(#colorValue)"
              animationDuration={1000}
              baseValue={0}
              dot={
                <CustomDot
                  cx={undefined}
                  cy={undefined}
                  payload={undefined}
                  index={undefined}
                />
              }
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Hero;
