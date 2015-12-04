package org.zkoss.demo.basic;
import org.zkoss.zk.ui.select.SelectorComposer;
import org.zkoss.zk.ui.select.annotation.Wire;
import org.zkoss.zk.ui.select.annotation.Listen;
import org.zkoss.zul.*;
 
public class TemplateComposer extends SelectorComposer<Window> {
	public ListModelArray fruits = new ListModelArray(
            new String[][] {
                {"Apple", "10kg"},
                {"Orange", "20kg"},
                {"Mango", "12kg"}
            });
 
    public ListModelArray getFruits() {
         return fruits;
    }
    
}
