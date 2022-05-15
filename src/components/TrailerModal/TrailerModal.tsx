import * as React from "react";
import { styled } from "@material-ui/core";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import useStyles from "./styles";
import { Video } from "../../actionTypes";

type videos = {
  videos: Video | undefined;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { onClose } = props;
  const classes = useStyles();

  return (
    <DialogTitle>
      {onClose ? (
        <IconButton
          className={classes.iconButton}
          aria-label='close'
          onClick={onClose}
        >
          <Close />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function TrailerModal({ videos }: videos) {
  const video = videos?.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant='contained' color='secondary' onClick={handleClickOpen}>
        Watch trailer
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
        maxWidth={"lg"}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        />
        <DialogContent>
          <iframe
            width='850'
            height='400'
            src={`https://www.youtube.com/embed/${video?.key}`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
