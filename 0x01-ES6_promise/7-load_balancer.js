export default function loadBalancer(chinaTask, usTask) {
  return Promise.race([chinaTask, usTask]);
}
