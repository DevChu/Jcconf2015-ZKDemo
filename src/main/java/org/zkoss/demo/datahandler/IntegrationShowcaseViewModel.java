package org.zkoss.demo.datahandler;

public class IntegrationShowcaseViewModel {

	private boolean like = true;
	private boolean zk = true;
	private String markdown = "#Attention \n The team made some adjustments in the **style.css** file. \n Please remember to remove ~~italic~~, and changethe style to: \n \t font-style: normal; \n\n For more information, please read the [style guide](https://example.com).";

	public boolean isLike() {
		return like;
	}

	public void setLike(boolean like) {
		this.like = like;
	}

	public boolean isZk() {
		return zk;
	}

	public void setZk(boolean zk) {
		this.zk = zk;
	}

	public String getMarkdown() {
		return markdown;
	}

	public void setMarkdown(String markdown) {
		this.markdown = markdown;
	}

}
