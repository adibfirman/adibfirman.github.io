interface ISum {
	a: number;
	b: number;
}

export default function sum({ a, b }: ISum) {
	return a + b;
}
