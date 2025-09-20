import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, useTexture, OrbitControls } from '@react-three/drei';

// Simple 3D Node and Line Components
const NodeIcon = ({ nodeCount = 3, connectionType = "linear" }) => {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  const renderNodes = () => {
    const nodes = [];
    const lines = [];
    
    if (connectionType === "linear") {
      // Linear node connection
      for (let i = 0; i < nodeCount; i++) {
        const x = (i - 1) * 0.8;
        nodes.push(
          <mesh key={`node-${i}`} position={[x, 0, 0]}>
            <sphereGeometry args={[0.15]} />
            <meshStandardMaterial color="#7c3aed" />
          </mesh>
        );
        
        if (i < nodeCount - 1) {
          lines.push(
            <mesh key={`line-${i}`} position={[(x + 0.4), 0, 0]}>
              <boxGeometry args={[0.6, 0.05, 0.05]} />
              <meshStandardMaterial color="#a855f7" />
            </mesh>
          );
        }
      }
    } else if (connectionType === "triangular") {
      // Triangular node connection
      const positions = [[0, 0.5, 0], [-0.5, -0.3, 0], [0.5, -0.3, 0]];
      positions.forEach((pos, i) => {
        nodes.push(
          <mesh key={`node-${i}`} position={pos}>
            <sphereGeometry args={[0.15]} />
            <meshStandardMaterial color="#7c3aed" />
          </mesh>
        );
      });
      
      // Connect nodes with lines
      lines.push(
        <mesh key="line-0" position={[-0.25, 0.1, 0]} rotation={[0, 0, -0.8]}>
          <boxGeometry args={[0.6, 0.05, 0.05]} />
          <meshStandardMaterial color="#a855f7" />
        </mesh>,
        <mesh key="line-1" position={[0.25, 0.1, 0]} rotation={[0, 0, 0.8]}>
          <boxGeometry args={[0.6, 0.05, 0.05]} />
          <meshStandardMaterial color="#a855f7" />
        </mesh>,
        <mesh key="line-2" position={[0, -0.3, 0]}>
          <boxGeometry args={[1, 0.05, 0.05]} />
          <meshStandardMaterial color="#a855f7" />
        </mesh>
      );
    } else if (connectionType === "circular") {
      // Circular node connection
      const radius = 0.6;
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        nodes.push(
          <mesh key={`node-${i}`} position={[x, y, 0]}>
            <sphereGeometry args={[0.12]} />
            <meshStandardMaterial color="#7c3aed" />
          </mesh>
        );
      }
      
      // Center node
      nodes.push(
        <mesh key="center-node" position={[0, 0, 0]}>
          <sphereGeometry args={[0.18]} />
          <meshStandardMaterial color="#8b5cf6" />
        </mesh>
      );
      
      // Lines from center to outer nodes
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius * 0.5;
        const y = Math.sin(angle) * radius * 0.5;
        
        lines.push(
          <mesh key={`line-${i}`} position={[x, y, 0]} rotation={[0, 0, angle]}>
            <boxGeometry args={[0.6, 0.04, 0.04]} />
            <meshStandardMaterial color="#a855f7" />
          </mesh>
        );
      }
    }
    
    return [...nodes, ...lines];
  };

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.1}>
      <group ref={meshRef}>
        {renderNodes()}
      </group>
    </Float>
  );
};

// Simple 3D Icon Renderer Component
const SimpleIcon3D = ({ type }) => {
  const iconConfigs = {
    project: { nodeCount: 4, connectionType: "linear" },
    users: { nodeCount: 4, connectionType: "circular" },
    briefcase: { nodeCount: 3, connectionType: "triangular" },
    infinity: { nodeCount: 6, connectionType: "circular" },
    community: { nodeCount: 5, connectionType: "circular" },
    dollar: { nodeCount: 3, connectionType: "linear" }
  };

  const config = iconConfigs[type] || iconConfigs.project;

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ width: '60px', height: '60px' }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <NodeIcon nodeCount={config.nodeCount} connectionType={config.connectionType} />
    </Canvas>
  );
};

const AboutSection = () => {
  const features = [
    {
      id: 1,
      title: "Project-Based",
      subtitle: "Learning",
      description: "Build real applications that you can showcase in your portfolio, not just theoretical knowledge.",
      iconType: "project"
    },
    {
      id: 2,
      title: "Industry",
      subtitle: "Mentorship",
      description: "Learn directly from professionals working in top tech companies with years of real experience.",
      iconType: "users"
    },
    {
      id: 3,
      title: "Job-Ready",
      subtitle: "Skills",
      description: "Focus on the exact technologies and frameworks that companies are actively hiring for today.",
      iconType: "briefcase"
    },
    {
      id: 4,
      title: "Lifetime",
      subtitle: "Access",
      description: "Access all course materials and updates forever with a one-time payment, no subscriptions.",
      iconType: "infinity"
    },
    {
      id: 5,
      title: "Community",
      subtitle: "Support",
      description: "Connect with fellow learners and professionals in our active community for continuous growth.",
      iconType: "community"
    },
    {
      id: 6,
      title: "Practical &",
      subtitle: "Affordable",
      description: "We create courses that give you actionable steps and real value at an affordable price point.",
      iconType: "dollar"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Foxicon Section */}
        <div className="mb-20">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-colors duration-300">
              Why <span className="text-purple-600">Foxicon</span><span className="text-gray-900">?</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="text-center"
              >
                {/* Simple 3D Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center">
                    <SimpleIcon3D type={feature.iconType} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-purple-600 mb-1">
                  {feature.title}
                </h3>
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {feature.subtitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
