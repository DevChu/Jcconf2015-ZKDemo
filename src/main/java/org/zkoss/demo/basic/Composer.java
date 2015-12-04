package org.zkoss.demo.basic;
import org.zkoss.zk.ui.select.SelectorComposer;
import org.zkoss.zk.ui.select.annotation.Wire;
import org.zkoss.zk.ui.select.annotation.Listen;
import org.zkoss.zul.*;
 
public class Composer extends SelectorComposer<Window> {
 
    @Wire
    Textbox input;
    @Wire
    Label output;
     
    @Listen("onClick=#ok")
    public void submit() {
        output.setValue(input.getValue());
    }
    
    @Listen("onClick=#clear")
    public void clear() {
        output.setValue("");
        input.setValue("");
    }
}
