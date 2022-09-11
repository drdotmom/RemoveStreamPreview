//META{"name":"RemoveStreamPreview","source":"","website":""}*//

class RemoveStreamPreview 
{
	getName() { return "RemoveStreamPreview"; }
	getVersion() { return "0.1.0"; }
	getAuthor() { return "BorisNikolaev"; }
	getDescription() { return "Remove Stream Preview, huli tut ne ponyatnogo"; }

	SetData(key, value) 
	{
		BdApi.setData("RemoveStreamPreview", key, value);
	}

	GetData(key) 
	{
		return BdApi.getData("RemoveStreamPreview", key);
	}

	start() {
		let element = Array.from(document.getElementsByTagName('div')).find(span =>
			(span.className.includes("pictureInPicture"))
		)

		if (element != null) 
		{
			this.elem = element;
			this.origStyle = element.style.display;
			this.elem.style.display = "none";
		}
	 }
	stop() {
		if (this.elem != null) 
		{
			this.elem.style.display = this.origStyle;
		}
	 }
}
