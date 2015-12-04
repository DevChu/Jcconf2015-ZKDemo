package org.zkoss.demo.basic;

import org.zkoss.bind.annotation.Command;
import org.zkoss.bind.annotation.Init;
import org.zkoss.bind.annotation.NotifyChange;

public class ViewModel {
	private String input;
	private String output;
	public String getInput() {
		return input;
	}
	public void setInput(String input) {
		this.input = input;
	}
	public String getOutput() {
		return output;
	}
	
	@Init
	public void init() {
		input = "init";
	}

	@Command
	@NotifyChange("output")
	public void save() {
		output = input;
	}

	@Command
	@NotifyChange({"input", "output"})
	public void clear() {
		input = "";
		output = "";
	}
}
