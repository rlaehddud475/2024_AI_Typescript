type angryDepth = 1 | 2 | 3 | 4 | 5;
const d1: angryDepth = 5;

type jobType = "전사" | "마법사" | "궁수" | "도적";
const d2: { id: string; level: number; job: jobType } = {
  id: "propheter",
  level: 155,
  job: "도적",
};
type Hamburger = "불고기버거" | "새우버거" | "치즈버거" | "빅맥" | "상하이버거";
type Side = "감자 튀김" | "치즈스틱" | "콘슬로우" | "해쉬브라운";
type Drinks =
  | "제로콜라"
  | "콜라"
  | "환타"
  | "물"
  | "스프라이트"
  | "제로스프라이트";
type SetMenu = {
  main: Hamburger;
  side: Side;
  drinks: Drinks;
};

const myMacdonald: SetMenu = {
  main: "빅맥",
  side: "감자 튀김",
  drinks: "제로콜라",
};
type brade =
  | "플렛"
  | "화이트"
  | "위트"
  | "허니오트"
  | "히티"
  | "파마산 오레가노";
type Main = "햄" | "치킨" | "참치" | "쉬림프";
type Cheese = "아메리칸" | "슈레드" | "모짜렐라";
type bage = "양상추" | "토마토" | "할라피뇨" | "피클" | "올리브";
type sourse =
  | "소금"
  | "후추"
  | "홀스레디쉬"
  | "머스타드"
  | "마요네즈"
  | "스테이크소스";
type subway = {
  brade: brade;
  main: Main;
  cheese: Cheese;
  Bage: bage[];
  Sourse: sourse[];
};

const mySubway: subway = {
  brade: "위트",
  main: "쉬림프",
  cheese: "아메리칸",
  Bage: ["양상추", "할라피뇨", "피클"],
  Sourse: ["소금", "후추", "마요네즈"],
};
