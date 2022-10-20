import { useRouter } from 'next/router'
import type { FC } from "react";
import { BsFillGiftFill } from "react-icons/bs";
import { Button, ButtonIcon } from "@/presentation/primitive/component/button/button.presenter";


const Point: FC = () => {
	const router = useRouter()
	return (
		<div className="mx-[10px] mt-[25px] w-[90%] rounded-3xl bg-white shadow-xl">
			<div className="flex justify-center px-[20px] ">
				<div>
					<div className="text-center text-[40px] font-bold">残り消費Pt</div>
					<div className="text-center text-3xl">
						<span className="text-5xl">34</span>
						<span>pt</span>
					</div>
				</div>
			</div>
			<div className="my-[10px] flex justify-center">
				<Button className="bg-gradient-to-r from-[#E07272] to-[#FFB661]" onClick={() => router.push('/exchange')}>
					<ButtonIcon>
						<BsFillGiftFill />
					</ButtonIcon>
					<i>景品を交換する</i>
				</Button>
			</div>
		</div>
	)
}

export default Point