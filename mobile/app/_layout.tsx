import { Stack } from "expo-router";
import "../global.css";
import { ClerkProvider } from "@clerk/clerk-expo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import AuthSync from "@/components/AuthSync";
import { StatusBar } from "expo-status-bar";
import * as Sentry from "@sentry/react-native";
import SocketConnection from "@/components/SocketConnection";

