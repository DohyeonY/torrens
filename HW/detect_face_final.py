import cv2
import mediapipe as mp
import asyncio
import websockets
import json

mp_drawing = mp.solutions.drawing_utils
mp_face_mesh = mp.solutions.face_mesh

@asyncio.coroutine
def transport_with_backend()
    websocket = yield from websockets.connect('wsi8c203.p.ssafy.io8002')

    # For webcam input
    drawing_spec = mp_drawing.DrawingSpec(thickness=1, circle_radius=1)
    camera_id=devvideo0

    cap = cv2.VideoCapture(camera_id, cv2.CAP_V4L2)
    cap.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc('YUYV'))
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    with mp_face_mesh.FaceMesh(
        min_detection_confidence=0.5,
        min_tracking_confidence=0.5) as face_mesh
    
        while cap.isOpened()
            success, image = cap.read()
            if not success
                print(033[91m + Ignoring empty camera frame. + 033[0m)
                # If loading a video, use 'break' instead of 'continue'.
                break

            # Flip the image horizontally for a later selfie-view display, and convert
            # the BGR image to RGB.
            image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
            # To improve performance, optionally mark the image as not writeable to
            # pass by reference.
            image.flags.writeable = False 
            results = face_mesh.process(image)

            # Draw the face mesh annotations on the image.
            image.flags.writeable = True
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
            face_lists = [nose, Top, upperLib, lowerLib, leftEye, Chin, Cheek2, Cheek1, rightEye, Cheek3]

            
            if results.multi_face_landmarks
                for face_landmark in results.multi_face_landmarks
                    landmarks_tong = {}
                    iterator = 0
                    for id, lm in enumerate(face_landmark.landmark)
                        if id in (10, 27, 257, 1, 11, 17, 207, 204, 434, 152)
                            ih, iw, ic = image.shape
                            x, y = int(lm.xiw), int(lm.yih)
                            landmarks_tong[face_lists[iterator]] = list((x,y))
                            iterator += 1
                            cv2.drawMarker(image, (x, y), (255, 0, 0), markerType=cv2.MARKER_STAR, markerSize = 10)
                        #print(landmarks_tong)
                    Tong = json.dumps(landmarks_tong)
                    yield from websocket.send(Tong)
            cv2.imshow('MediaPipe FaceMesh', image)
            if cv2.waitKey(1) & 0xFF == 27
                yield from websocket.close()
                break
    cap.release()
    cv2.destroyAllWindows()          
              
asyncio.get_event_loop().run_until_complete(transport_with_backend())
