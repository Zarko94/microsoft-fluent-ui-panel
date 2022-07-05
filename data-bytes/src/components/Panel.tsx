import * as React from 'react';
import { DefaultButton } from '@fluentui/react/lib/Button';
// import { Panel } from '@fluentui/react/lib/Panel';
import { Panel } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
// import { initializeIcons } from '@fluentui/react/lib/Icons';

// export const PanelBasicExample: React.FunctionComponent = (props) => {
// interface Props{
//   userId:number;
//   title:string;
//   body:string;
//   isOpen:boolean;
//   data:any
// }


//   const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
// console.log(props)
//   return (
//     <div>
//       {/* <DefaultButton text="Open panel" onClick={openPanel} /> */}
//       <Panel
//         headerText="Sample panel"
//         isOpen={props.isOpen}
//         onDismiss={props.setIsOpen}
//         // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
//         closeButtonAriaLabel="Close"
//       >
//         <p>Here you instert</p>
//       </Panel>
//     </div>
//   );
// };

export const CustomPanel:React.FC<{
  isOpen:boolean;
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
  data:any
}>=props=>{



return <Panel isOpen={props.isOpen} onDismiss={()=>props.setIsOpen(false)}>
<div>
<h2>{props.data.id}</h2><p>{props.data.title}<b>{props.data.body}</b></p>


</div>

</Panel>


}