//|(union):합집합(or)
const b: String | Number = "1";

const c: { name: string; age: String | number }[] = [
  {
    name: "김블루",
    age: "27살",
  },
  {
    name: "김정은",
    age: 40,
  },
];

//&(intersection[and=교집합])
//cosnt b2: string & number => never타입
const b2: { name: string } & { age: number } = {
  age: 50,
  name: "틀딱",
};

const b3: any = { name: "뭐든지 가능" };

const b4: (x: String) => String = (x) => `${x}맛 아이스크림`;

const b5: (x: number) => number = (x) => x ** x;
