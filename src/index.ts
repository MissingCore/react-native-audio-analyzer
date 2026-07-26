import { NitroModules } from 'react-native-nitro-modules';
import type { Processor } from './Processor.nitro';

const AudioAnalyzerHybridObject =
  NitroModules.createHybridObject<Processor>('Processor');

function computeAmplitude(filePath: string, outputSampleCount: number) {
  return AudioAnalyzerHybridObject.computeAmplitude(
    filePath,
    outputSampleCount
  );
}

export { computeAmplitude };
