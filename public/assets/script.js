let fileUpload = document.getElementById('file_upload')
let prefix
fileUpload.addEventListener('change', function () {
	let fileSvg = fileUpload.files[0]
	let filename = fileSvg.name
	prefix = filename.replace('.svg', '-')
	let reader = new FileReader()
	reader.readAsText(fileSvg)
	reader.onload = function () {
		document.getElementById('svg_preview').innerHTML = reader.result
		document.getElementById('svg_form').style.display = 'block'
	}
})

let playGround = function () {
	let resizeValue = document.getElementById('resize_value').value
	document.getElementsByTagName('svg')[0].setAttribute('id', 'svg_resize')
	document.getElementsByTagName('svg')[0].setAttribute('width', resizeValue)
	document.getElementsByTagName('svg')[0].setAttribute('height', resizeValue)
	document.getElementById('download_wrapper').style.display = 'block'
	let fileRename = prefix + resizeValue + 'px.png'
	document.getElementById('data').setAttribute('download', fileRename)
}

// SVG to DATA URL Library

function exportResizedSvg() {
	let svg = document.getElementById('svg_resize')
	let img = document.getElementById('fromcanvas')

	svg.toDataURL('image/png', {
		callback: function (data) {
			img.setAttribute('src', data)
			let a = document.querySelector('#data')
			a.href = data
		}
	})
}
