import {Button, CloseButton, Dialog, Portal,Textarea} from "@chakra-ui/react"
import {useEffect, useState} from "react";
import _ from "lodash";


interface IProps {
  dataDefault?:any
  saveData: (dataDefault: any) => void
}
const ModalUploadData = (props: IProps) => {
  console.log("props", props)
  const [open, setOpen] = useState(false)
  const [dataJson, setDataJson] = useState<string>([])
  useEffect(() => {
    if (!props?.dataDefault) {
      setDataJson("")
      return
    }
    if (_.isString(props?.dataDefault)) {
      setDataJson(props?.dataDefault || "")
    } else {
      setDataJson(JSON.stringify(props?.dataDefault || {}))
    }
  }, [props?.dataDefault]);
  return (
    <Dialog.Root
      lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}
      size="cover" placement="center" motionPreset="slide-in-bottom">
      <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          Upload
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop/>
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Upload json data</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm"/>
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body>
              <div style={{
                overflowY: "auto"
              }}>
                <Textarea
                value={dataJson}
                rows={6}
                resize="vertical"
                onChange={(e) => {
                  console.log("e",e)
                  setDataJson(e.target.value)
                }}
              ></Textarea>

              </div>

            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={() => {
                if (props?.saveData) {
                  props.saveData(dataJson)
                  setOpen(false)
                }
              }}>Save</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
}

export default ModalUploadData;
