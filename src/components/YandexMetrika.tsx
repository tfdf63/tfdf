'use client'

import { useEffect } from 'react'

declare global {
	interface Window {
		ym: (
			counterId: number,
			action: string,
			params?: Record<string, unknown>
		) => void
	}
}

export const YandexMetrika = () => {
	useEffect(() => {
		// Добавляем скрипт Яндекс Метрики на страницу
		const script = document.createElement('script')
		script.innerHTML = `
			(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			m[i].l=1*new Date();
			for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
			k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			ym(53434408, "init", {
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true
			});
		`
		document.head.appendChild(script)

		// Возвращаем функцию очистки, которая удалит скрипт, если компонент будет размонтирован
		return () => {
			if (script.parentNode) {
				script.parentNode.removeChild(script)
			}
		}
	}, [])

	return (
		<noscript>
			<div>
				<img
					src='https://mc.yandex.ru/watch/53434408'
					style={{ position: 'absolute', left: '-9999px' }}
					alt=''
				/>
			</div>
		</noscript>
	)
}
