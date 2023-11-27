import React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

interface LabelSpinnerProps {
  isLabel?: boolean;
  isOpen: boolean;
}

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number },
) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" component="div" color="white">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

const BasicProgress = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={80} thickness={4} />
    </Box>
  );
};

export default function LabelSpinner({ isLabel, isOpen }: LabelSpinnerProps) {
  const imageList = useSelector((state: RootState) => state.imageList);

  const BackBlur = `fixed bg-black opacity-40 w-full h-full left-0 top-0 z-40 ${
    isOpen ? 'fixed' : 'hidden'
  }`;
  const Wrapper = `fixed flex flex-col justify-center items-center top-1/2 left-1/2 z-50 ${
    isOpen ? 'fixed' : 'hidden'
  }`;

  return (
    <>
      <div className={BackBlur} />
      <div className={Wrapper}>
        {isLabel ? (
          <CircularProgressWithLabel
            size={80}
            thickness={4}
            value={imageList.progress}
          />
        ) : (
          <BasicProgress />
        )}
        <p className="mt-2">Loading...</p>
      </div>
    </>
  );
}
